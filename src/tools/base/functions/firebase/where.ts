
type Tprops = {
  args: any;
  pass: {
    fbInit: any;
    arrRefStrings: string[];
    arrWhere: any;
    arrFuncs: any[];
  };
};

export const css1 =
  'color: green; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: yellow; background-color: green; font-size: 10px; padding: 2px 6px; border-radius: 3px';

export const where = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbInit, arrRefStrings, arrWhere, arrFuncs } = pass;

  // ---------- set Local Imports
  const { getFirestore, getDocs, collection, where, query } = await import(
    '@firebase/firestore'
  );

  // ---------- set Caps Inputs

  // ---------- set Short Str
  const fbErrMsg1 = 'Alguma entrada where foi preenchida errado.';
  const par1 = 'noComponent';

  // -----------------------------
  // ---------- set Init Firestore
  // -----------------------------
  if (!fbInit) return console.log(fbErrMsg1, { fbInit });
  const fireInit: any = getFirestore(fbInit[0]);

  const arrConds = [];
  const newArrWh = () => {
    const promiseArray = arrWhere.map((capsCond: any) => {
      const resolve = capsCond();

      arrConds.push(resolve);

      return getDocs(
        query(refColl, where(resolve.field, resolve.operator, resolve.value)),
      );
    });

    return promiseArray;
  };

  const refColl = collection(fireInit, ...arrRefStrings);
  const resolvePromise = await Promise.all(newArrWh());

  const arrDocs = [];
  resolvePromise &&
    resolvePromise.forEach((snaps: any) => {
      snaps.forEach((doc: any) => {
        arrDocs.push(doc.data());
      });
    });

  console.log('%cWhere Cond', css1, { arrConds });
  console.log('%cWhere Docs Found', css2, { arrDocs });

  for (const currFunc of arrFuncs) currFunc(arrDocs, args);
};

