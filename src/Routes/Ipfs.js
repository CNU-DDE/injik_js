import React, { Component } from "react";
import IpfsApi from "ipfs-api"


class ResumeForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            ipfsHash: '',
            buffer: null,
        }

        this.ipfsApi =  IpfsApi('ipfs.infura.io', '5001', {protocal: 'https'})
    }

    captureFile=(event)=>{
        event.preventDefault();
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () =>{
            this.setState({ buffer: Buffer(reader.result)})
            console.log('buffer', this.state.buffer)
        }
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.ipfsApi.files.add(this.state.buffer, (error, result) => {
            if(error){
                console.error(error)
                return
            } 
            console.log(result[0].hash)
        })
    }
   

    render(){
        return (
            <div>
                <div>
                    <form>
                        <h1>파일 업로드하기</h1>
                        {this.state.ipfsHash}<br/>
                        <input type='file' onChange={this.captureFile}/>
                        <button onClick={this.onSubmit}>등록</button>

                    </form>
                </div>
            </div>

        )

    }
}

export default ResumeForm;