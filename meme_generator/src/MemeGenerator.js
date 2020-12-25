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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

        const url = "https://api.imgflip.com/get_memes"
        fetch(url)

        //copying the JSON file data in response variable
            .then(response=> response.json())

        
            .then (response =>{
                    //getting the array of images
                        const {memes} = response.data
                       
                    //since we cannot setState directly, setting the state of 'allImages' to memes
                        this.setState({allImages : memes})
                    }
                )
    }


    handleChange(event){

        //setting name = event.target.name & value= event.target.value
        const {name, value} = event.target

        //place the value of input received in the input field with the name...
        this.setState({[name] : value})
    }

    handleSubmit(event){

        //to not submit right away
        event.preventDefault()

        //getting a random index from allImages array
        const randNum = Math.floor(Math.random() * this.state.allImages.length)
        //get the url from that index
        const randNumMeme = this.state.allImages[randNum].url
        this.setState({randomImg : randNumMeme})
    }
    
    

    render(){

        return (
            <div>
                <form className = "meme-form" onSubmit={this.handleSubmit}>
                    <input 
                    type='text' 
                    name ="topText" 
                    placeholder ="Enter first text..."
                    value = {this.state.topText}
                    onChange = {this.handleChange}
                     />

                    <br/>

                    <input 
                    type='text'   
                    name ="bottomText" 
                    placeholder ="Enter second text here..."
                    value = {this.state.bottomText}
                    onChange ={this.handleChange}
                    />
                    <br/>

                    <button >Generate </button>
                </form>

                <div className='meme'>
                    <img src={this.state.randomImg}  alt=""/>
                    <h2 className ="top"> {this.state.topText} </h2>
                    <h2 className="bottom"> {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }
}



export default MemeGenerator