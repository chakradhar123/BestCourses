
import {  Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import {db} from '../db'
import MediaCard from "../components/LandingPage/Card";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import ReactLoading from 'react-loading';
//try
const useStyles = makeStyles((theme) => ({
    flex:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    minHeight:'100vh'

    },
    root: {
      flexGrow: 1,
    },
    paper: {
     
  
    },
    grid:{
        margin:'1% 0',
        padding:'1% 2%'
    },
    upperGrid:{
        margin:'0 0',
        padding:'1% 2%',
     
      
    },
    chip:{
        margin:'10px',
        fontSize:'18px',
        fontFamily:'PT Sans',
        '&:hover':{
    
            transform:'scale(1.05)',
            transitionDuration:'0.1s',
            WebkitTransition:'transform 1s ease-in-out',
          
            
          },
    }
  }));
function LandingPage() {
    const classes = useStyles();
    const [allCourses, setAllCourses] = useState(null)
    const [currCourses, setCurrCourses] = useState([])
    const [selectedCat,setSelectedCat]=useState('All')
    const [categories, setCategories] = useState([])
    const getCourses=(category)=>{

        if(category.name==='All'){
            setCurrCourses(allCourses)
        }else{
            
            if(allCourses!==null)
            setCurrCourses(allCourses.filter(course=>course.Category===category.name))
        }
        setSelectedCat(category.name);
    }
    useEffect(() => {

        if(allCourses==null){
           
            db.collection('courses').get().then(
                snapshot=>{
                    let currState=[]
                    snapshot.docs.forEach(course=>{
                        currState.push(course.data())
                    })
                    setAllCourses(currState)
                    setCurrCourses(currState)
                }
                
            );
            db.collection('Category').orderBy("timestamp").get().then(
                snapshot=>{
                    let currState=[]
                    snapshot.docs.forEach(category=>{
                        currState.push(category.data())
                    })
                    
                    setCategories(currState)
                }
                
            );
        }
        
    }, [allCourses])
    return (
        
        <span className={classes.flex}>
           <AppBar/>
          
           {allCourses?
           <div  className={classes.root}>
           <Grid justify='center'  className={classes.upperGrid} container >
           {categories.map((category,index)=><Chip key={index} style={{color:selectedCat===category.name?'white':'#03A9F4',backgroundColor:selectedCat===category.name?'#03A9F4':'white',border:selectedCat===category.name?'none':'2px solid #03A9F4'}} onClick={()=>{
               getCourses(category)
           }} className={classes.chip} label={category.name} />)}
           
  </Grid>
           <Grid className={classes.grid} container  wrap='wrap' justify="space-around"  >
           {
               currCourses.map(course=><MediaCard key={course.name} course={course} className={classes.paper}/>)
           }
           
           
         
            </Grid>
            </div>:<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><ReactLoading  type={"spin"} color={'#03A9F4'} height={'40px'} width={'40px'} /></div>
           }
            <footer   class="footer">
            <div class="footer-text-container">
                <p class="muted">&copy; BestCourses by Chakradhar Reddy 2021 | All rights reserved</p>
            </div>
        </footer>

           </span>
       
    )
}

export  {LandingPage}
