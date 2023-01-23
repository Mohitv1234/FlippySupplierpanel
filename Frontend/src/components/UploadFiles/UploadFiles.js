import React from 'react'
import SecondNavProduct from '../Include/SecondNavProduct'
import Thirdnav from './Thirdnav'
import UploadFileContent from './UploadFileContent'
import "./UploadFiles.css"
import Dragdropbig from "./Dragdropbig.svg"

const UploadFiles = () => {
    return (
        <div>
                 <SecondNavProduct Name={{name:"Upload Files", directory:"Home > Upload File"}} Btn={[{name:"Add New",style: "bluebtn", icon:'las la-plus-circle',databstoggle:'offcanvas',databstarget:'#offcanvasRight',ariacont:'offcanvasRight',backgroundColor:"#164C96"}]}/>
        <div className="p-3 py-3 pb-0">

                 <div className="bg-light dfc rounded-5 p-4">
                                <i className="las d-block la-cloud-upload-alt fs-3 mb-2"></i>
                               <img src={Dragdropbig} alt="" />
                                <input type="file" id="input-file-max-fs" className="m-0 file-upload" data-max-file-size="2M" />
                            </div>
        </div>
            <div className="container-fluid  ">

            <div className="container-fluid px-0 text-nowrap main-container-for-upload py-4 px-3">
                
                <Thirdnav></Thirdnav>
                </div>
                <div className="row">
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                    <UploadFileContent />
                </div>
            </div>

        </div>
    )
}

export default UploadFiles