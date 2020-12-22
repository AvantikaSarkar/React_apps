import React, {Component} from 'react'


class MemeGenerator  extends Component{

    constructor(){
        super()
        this.state = {

            topText :"",
            bottomText :"",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allImages : []
        }
    }

    componentDidMount(){

        const url = "https://api.imgflip.com/get_memes"
        fetch(url)
            .then(response=> response.json())
            .then (response =>{
                        const {memes} = response.data
                        console.log(memes[0])
                        this.setState({allImages : memes})
                    }
                )
    }

    
    

    render(){

        return (
            <div>
                <form className = "meme-inputs">
                    <input 
                    type='text' 
                    name ="topText" 
                    placeholder ="Enter first text..."
                    value = {this.state.topText}
                    //onChange = {}
                     />

                    <br/>

                    <input 
                    type='text'   
                    name ="bottomText" 
                    placeholder ="Enter second text here..."
                    value = {this.state.bottomText}
                    //onChange ={}
                    />
                    <br/>

                    <button >Generate </button>
                </form>
            </div>
        )
    }
}



export default MemeGenerator