import './ConstructorTemplate.css';
import Icon from '../components/Icon';
import Bullet from './icons/bullet.svg' ;
import Armor from './icons/armor.svg' ;
import Measure from './icons/caliper.svg' ;
import Damage from './icons/damage.svg' ;
import Attachment from './icons/attachements.svg' ;
import MH from './icons/MH.svg' ;
import Report from './icons/report.svg' ;
import Statistics from './icons/statistics.svg' ;
import HSP from './icons/HSP.svg' ;
import { useDispatch } from 'react-redux';
import {fetchDummy} from '../dummy/getDummySlice';
import DisplayDummy from '../dummy/DisplayDummy'
import {store} from '../../app/store';
import React, {useState} from 'react';
import { useSelector} from "react-redux";




const ConstructorTemplate = () => {
    const bullet_icon = <img src={Bullet} alt="bullet" width="100"/>
    const constructor_icon = <img src={Armor} alt="constructor" width="100"/>
    const measure_icon = <img src={Measure} alt="damage measurment" width="100"/>
    const damage_icon = <img src={Damage} alt="damage per layer" width="100"/>
    const attach_icon = <img src={Attachment} alt="attach external files" width="100"/>
    const MH_icon = <img src={MH} alt="multi-hit" width="100"/>
    const report_icon = <img src={Report} alt="input_report_RK" width="100"/>
    const stat_icon = <img src={Statistics} alt="target recomendation" width="100"/>
    const HSP_icon = <img src={HSP} alt="HSP data" width="100"/>
    const dispatch = useDispatch();
    const getDummy = ()=>{dispatch(fetchDummy())}
    const hasDummy = useSelector((state)=>state.dummySlice.HasDummy)
    const dummy = useSelector((state)=>state.dummySlice.dummy)

    
    return (
        <div className="AppBody">
            <div className="TopBar"><h1> armor development</h1></div>
            <div className="ContentContainer">
                <div className="SideBar">
                    <button onClick={()=>{dispatch(fetchDummy())}}>
                        <div className="icon_body"> 
                            <div className="icon_symbol">{bullet_icon}</div>
                            <div className="icon_title"> ballistic test </div>
                        </div>
                    </button>
                    <Icon img={constructor_icon} title="constructor" />
                    <Icon img={measure_icon} title="damage" />
                    <Icon img={MH_icon} title="Multi-Hit" />
                    <Icon img={report_icon} title="report input" />
                </div>
                <div className="ContentBody">
                    {
                    hasDummy && <DisplayDummy dummy={dummy}/>
                    
                    }
                    
                </div>
            </div>
        </div>
    );
}
export default ConstructorTemplate;