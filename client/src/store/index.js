import { proxy } from "valtio";

const state = proxy({
    intro:true,
    color:'#EFBD48',
    color2:'black',
    isLogoTexture:true,
    isFulltexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png'
});
export default state;