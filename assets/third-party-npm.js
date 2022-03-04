/* First import jquery */
import $ from 'jquery'

window.jQuery = $
window.$ = $

import moment from 'moment'
import ApexCharts from 'apexcharts'


window.moment = moment
window.ApexCharts = ApexCharts

import 'jquery-ui-bundle'
import 'datatables.net-dt'
import 'peity'
import * as L from 'leaflet'
import 'leaflet.markercluster'

/* See issue https://github.com/PaulLeCam/react-leaflet/issues/255 */
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const iconDefault = L.icon({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = iconDefault;

window.L = L

import 'flatpickr'
import 'bootstrap/dist/js/bootstrap.bundle'
import crossfilter from 'crossfilter2'
import * as dc from 'dc'
import * as cubism from 'cubism'

import 'jquery.are-you-sure'

window.crossfilter = crossfilter
window.dc = dc
window.cubism = cubism

import 'vis-network'
/* 
  Must be included here, otherwise it's not going to work, in fact some 
  external libraries have been changed and added this ntop util functions 
*/

/* regeneratorRuntime error, check https://github.com/babel/babel/issues/9849 */
import regeneratorRuntime from "regenerator-runtime" 
import ToastUtils from '../http_src/utilities/toast-utils'
import NtopUtils from '../http_src/utilities/ntop-utils'
import '../http_src/utilities/string-utils'

window.regeneratorRuntime = regeneratorRuntime
window.ToastUtils = ToastUtils
window.NtopUtils = NtopUtils

import './third-party-npm.scss'
