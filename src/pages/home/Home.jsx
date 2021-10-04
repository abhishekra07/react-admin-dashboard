import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import './home.css';

import { userData } from "../../dummyData";

function Home() {
  return(
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
        </div>
    </div>
  )
}

export default Home;
