import React from "react";
import Jumbo from "./componets/jumbotron/jumbotron";
import Cont from "./componets/coten/cont";
import logo from "./img/generartion.svg"
import{ Cv }from './componets/js/cv'

let cv=Cv.idiom.Es;

export default function Body(){
    return (
        <div>
        <Jumbo/>
        <Cont con={cv.work.conten} title={cv.work.name} />
        <Cont con={cv.furtherTraining.conten} title={cv.furtherTraining.name}/>
        <Cont con={cv.academicTraining.conten} title={cv.academicTraining.name}/>

        </div>
    )
}
/*
        <Cont img={logo} width={250} conten={text} title={cv.furtherTraining.name}/>
        <Cont alt='cetis' width={250} conten={cetis} title={cv.academicTraining.name}/>*/