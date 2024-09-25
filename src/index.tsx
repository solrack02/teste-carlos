

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'sc2';

          let args: any = [];

          const screens = [
            
        
        
        () => <>{/*styles library*/}</>, 
        
        
        () => <>{/*elements library*/}</>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc1",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[() => {
                  const textStyle = {
                    fontSize: 20,
                    color: '#fff2',
                    textAlign:'center',
                    maxWidth: 200,
                    // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
                  };

                  return (
                    <RN.Text style={textStyle}>
                      {'Adicione Elementos nessa tela!'}
                    </RN.Text>);
                }],

          startFunctions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc2",

          styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

          screenElements:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><></>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc1");
        }
        ],

          args,
        }}/>],

          startFunctions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc3",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[() => {
                  const textStyle = {
                    fontSize: 20,
                    color: '#fff2',
                    textAlign:'center',
                    maxWidth: 200,
                    // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
                  };

                  return (
                    <RN.Text style={textStyle}>
                      {'Adicione Elementos nessa tela!'}
                    </RN.Text>);
                }],

          startFunctions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => ({
            'all': jsvals.j8({pass: {
          propertieValues: { 
        'colors': jsvals.j8({pass: {
          propertieValues: { "primaryColor": jsvals.j8({pass: {
          propertieValues: "#147804"
        }}) }
        }}), 
        'sizes': jsvals.j8({pass: {
          propertieValues: { 
        'fixed': jsvals.j8({pass: {
          propertieValues: { 
        "10": jsvals.j8({pass: {
          propertieValues: "10px"
        }}), 
        "20": jsvals.j8({pass: {
          propertieValues: "20px"
        }}), "30": jsvals.j8({pass: {
          propertieValues: "30px"
        }}) }
        }}), 'percent': jsvals.j8({pass: {
          propertieValues: { 
        "10": jsvals.j8({pass: {
          propertieValues: "10%"
        }}), 
        "20": jsvals.j8({pass: {
          propertieValues: "20%"
        }}), 
        "50": jsvals.j8({pass: {
          propertieValues: "50%"
        }}), "100": jsvals.j8({pass: {
          propertieValues: "100%"
        }}) }
        }}) }
        }}), 
        'categs': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Pets"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/dog.png?alt=media&token=f5bf526c-5fb3-4092-869d-11ffcfb25d2f"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Limpeza"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/cleaning.png?alt=media&token=70c342c4-1e04-4dd8-ab71-2ef9227d777a"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Bebidas"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/drink.png?alt=media&token=99dc2e9d-fecf-4cc4-9c84-a6fd9a6d1985"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Alimentos"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Hortifruti"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://th.bing.com/th/id/OIP.V0veQoHgEoXnjRVZJ37fDAHaEK?rs=1&pid=ImgDetMain"
        }})}
        }}) ]
        }}), 
        'prods': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Torta Holandesa MISS DAISY 470g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/torta.png?alt=media&token=4daa4ce3-ca7d-45ec-a8b4-f4162e648368"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "26,79"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Requeijão Vigor"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/requeijao.png?alt=media&token=a15c2035-3ef5-4f14-a7c8-7d58dd7b1fc0"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "6,59"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Presunto Sadia 200g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/presunto.png?alt=media&token=bc236340-c063-41c6-a98c-af1707cfe482"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "9,60"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Sorvete Kibon 800ml Ovomaltine"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/sorvete.png?alt=media&token=e3e69eb6-b7c6-4ee8-8c72-294417307398"
        }}), 
        "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }}), "price": jsvals.j8({pass: {
          propertieValues: "19,90"
        }})}
        }}) ]
        }}), 
        "currCateg": jsvals.j8({pass: {
          propertieValues: "Pets"
        }}), 
        'Pets': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Rações"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: { }
        }}), jsvals.j8({pass: {
          propertieValues: { }
        }}) ]
        }}), 'Limpeza': jsvals.j8({pass: {
          propertieValues: [ jsvals.j8({pass: {
          propertieValues: { }
        }}) ]
        }}) }
        }})
          });
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
