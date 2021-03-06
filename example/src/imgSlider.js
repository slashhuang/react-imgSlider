import React, { Component ,PropTypes} from 'react';
import {ImgSlider} from '../../src/index.js';

export class SliderDemo extends Component {
    constructor(props,context) {
        super(props,context);
        this.state={
            show:true,
            showThumbnail:true
        }
    }
    handleSlider(){
        switch(arguments[0]){
            case 'showDefinedThumbnail':
                this.setState({
                    show:true,
                    showThumbnail:true,
                    thumbnailKey:'thumbnail'
                });break;
            case 'noShowThumbnail':
                this.setState({
                    show:true,
                    showThumbnail:false,
                    thumbnailKey:undefined
                });break;
            default :
                this.setState({
                    show:true,
                    showThumbnail:true,
                    thumbnailKey:undefined
                });break;
        }
    }
    render() {
        let {show,showThumbnail,thumbnailKey} = this.state;
        let imgList=[
            {
                profile:'1叔2015上传',
                url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
            },
            {
                profile:'1哥2015上传',
                url:'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=2544720638,729810412&fm=21&gp=0.jpg'
            },
            {
                profile:'2哥2015上传',
                url:'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
            },
            {
                profile:'3哥2015上传',
                url:'http://www.bz55.com/uploads/allimg/150309/139-150309101F2.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg'
            },
            {
                profile:'4哥2015上传',
                url: 'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img0.imgtn.bdimg.com/it/u=2926840907,3192872789&fm=21&gp=0.jpg'
            },
            {
                profile:'5哥2015上传',
                url: 'http://www.bz55.com/uploads/allimg/150309/139-150309101A8.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img5.imgtn.bdimg.com/it/u=4207978144,3154923917&fm=21&gp=0.jpg'
            },
            {
                profile:'5哥2015上传',
                url: 'http://img3.imgtn.bdimg.com/it/u=227823385,2843041802&fm=21&gp=0.jpg',
                description:'闪惠商户培训资料',
                thumbnail:'http://img2.imgtn.bdimg.com/it/u=1813764503,1895922603&fm=21&gp=0.jpg'
            },
            {
                profile:'5叔2015上传',
                url:'http://img0.imgtn.bdimg.com/it/u=1649172259,4185796887&fm=21&gp=0.jpg',
                description:'熊猫野外生存',
                thumbnail:'http://img5.imgtn.bdimg.com/it/u=1432870041,1164599966&fm=21&gp=0.jpg'
            }
        ];
        let pageNum=4;
        return (
            <div>
                <button success onClick={(e)=>this.handleSlider.call(this)} >点击出现照片展示插件(缩略图默认)</button>
                <button success className='mg-left-10' onClick={(e)=>this.handleSlider.call(this,'showDefinedThumbnail')}>
                点击出现照片展示插件(缩略图自定义)</button>
                <button className='mg-left-10' success onClick={(e)=>this.handleSlider.call(this,'noShowThumbnail')}>
                点击出现照片展示插件(无缩略图)
                </button>
                <ImgSlider  show={show} showThumbnail={showThumbnail}
                            imgList={imgList}
                            profileKey={'profile'} urlKey={'url'}  titleKey={'description'} thumbnailKey={thumbnailKey}
                            pageNum={pageNum}/>
            </div>

        );
    }
};
