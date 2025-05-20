import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Registration } from './components/register/register';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { PrimitiveDataBinding } from './dataBinding/primitiveType/data';
import { NetflixHeader } from './netflix/netflix-header/netflix-header';
import { NetflixMain } from './netflix/netflix-main/netflix-main';
import { ArrayDataBinding } from './dataBinding/ArrayType/ArrayDataBinding';
import { ObjectTypeBinding } from './dataBinding/objectType/ObjectDataBinding';
import { MapTypeDataBinding } from './dataBinding/MapType/MapDataBinding';
import { BindingInList } from './dataBinding/ArrayOfObject/AOB-inTags';
import { ICCPointsTable } from './dataBinding/ArrayOfObject/PointsTable';
import { HookUseStateExp } from './dataBinding/State/UseHookState';
import { DateType } from './dataBinding/DateType/DateDataBinding';
import { TwoWayBindingUsingEvent } from './dataBinding/TwoWayDataBinding/TWB-usingEvent';
import { ProductDetails } from './dataBinding/TwoWayDataBinding/TWB-ProductDetailForm';
import { TextFormtingStyleBinding } from './Tasks/textFormatingStyleBinding';
import { NumberToWord } from './Tasks/NumberToWord';
import { StateArrayBindingPrac } from './dataBinding/ArrayType/StateArrayBindingPrac1';
import { StyleBinding } from './styleBinding/demo';
import { ChangingBtn } from './classBinding/ChangingBS-Icons';
import { InlineEventHandling } from './event-binding/inlineEventHandling';
import { EmbeddedEventBinding } from './event-binding/embeddedEventBinding';
import { EventPropagation } from './event-binding/EventPropogation';
import { PreventDefault } from './event-binding/EventPreventDefault';
import { OnBlurEvent } from './event-binding/ElementStateEvent/onBlurEvent';
import { AmazonCart } from './event-binding/mouseEvents/AmazonMouseEvent';
import { TimerDemo } from './event-binding/timer-events/timer-demo';
import { OnSubmitEvent } from './event-binding/Form-events/onSumbmitEvent';
import { PassVerify } from './event-binding/keyBoardEvents/PassVerification';
import { FetchMthd } from './API-Handling/fetchMthd';
import { XMLHttpRequestPrac } from './API-Handling/XMLHttpRequest';
import { JQajaxPrac } from './API-Handling/jQ-ajax';
import { AxiosPrac } from './API-Handling/Axios';
import { NasaApi } from './API-Handling/nasaApi';
import { CRUD } from './inmemory-CRUD/inmemory-crud';
import { FormDemo } from './ReactForm/from-demo';
import { FromikDemo } from './ReactForm/formik-demo';
import { UseStateHook } from './dataBinding/State/UseStateHook';
import { LoginComponent } from './components/ComponentPrac/LoginComponent';
import { LoginCompProp } from './components/ComponentPrac/LoginCompProp';
import { MaterialDemo } from './React-Material-UI/MaterialDemo';
import { UseParamDemo} from './React-Routing/useParams/useParamIndex'
import { RoutingApp } from './React-Routing/RoutingApp/RoutingAppIndex';
import { ObjectDb } from './dataBinding/objectType/ObjectDB';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberToWord/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
