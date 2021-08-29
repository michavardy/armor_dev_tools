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

    return (
        <div className="AppBody">
            <div className="TopBar"><h1> armor development</h1></div>
            <div className="ContentContainer">
                <div className="SideBar">
                    <Icon img={bullet_icon} title="ballistic test" />
                    <Icon img={constructor_icon} title="constructor"/>
                    <Icon img={measure_icon} title="damage"/>
                    <Icon img={MH_icon} title="Multi-Hit"/>
                    <Icon img={report_icon} title="report input"/>
                </div>
                <div className="ContentBody"></div>
            </div>
        </div>
    );
}
export default ConstructorTemplate;