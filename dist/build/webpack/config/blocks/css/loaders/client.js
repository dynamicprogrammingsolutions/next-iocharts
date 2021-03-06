"use strict";exports.__esModule=true;exports.getClientStyleLoader=getClientStyleLoader;var _miniCssExtractPlugin=_interopRequireDefault(require("../../../../plugins/mini-css-extract-plugin"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getClientStyleLoader({isDevelopment,assetPrefix}){return isDevelopment?{loader:'next-style-loader',options:{// By default, style-loader injects CSS into the bottom
// of <head>. This causes ordering problems between dev
// and prod. To fix this, we render a <noscript> tag as
// an anchor for the styles to be placed before. These
// styles will be applied _before_ <style jsx global>.
insert:function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);}}}:{// @ts-ignore: TODO: remove when webpack 5 is stable
loader:_miniCssExtractPlugin.default.loader,options:{publicPath:`${assetPrefix}/_next/`,esModule:false}};}
//# sourceMappingURL=client.js.map