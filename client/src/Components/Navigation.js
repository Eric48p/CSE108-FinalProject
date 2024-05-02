import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Alumni from '../Pages/Alumni';
import Join from '../Pages/Join';
import Calendario from '../Pages/Affairs/Calendario';
import ExecutiveBoard from '../Pages/Affairs/ExecutiveBoard';
import Affairs from '../Pages/Affairs/Affairs';
import WeeklyAnnouncements from '../Pages/Affairs/WeeklyAnnouncements';
import Academics from '../Pages/Pillars/Academics';
import Familia from '../Pages/Pillars/Familia';
import ManitosMentorshipProgram from '../Pages/Pillars/ManitosMentorshipProgram';
import Network from '../Pages/Pillars/Network';
import Outreach from '../Pages/Pillars/Outreach';
import Professionalism from '../Pages/Pillars/Professionalism';
import SHPEtinas from '../Pages/Pillars/SHPE-tinas';
import SHPENationalConvention from '../Pages/Pillars/SHPENationalConvention';
import Forums from '../Pages/Forums';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import NewForum from '../Pages/NewForum';
import Forum from '../Pages/Forum';




function Navigation() {

  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Affairs" element={<Affairs />} />
          <Route path="/ExecutiveBoard" element={<ExecutiveBoard />} />
          <Route path="/WeeklyAnnouncements" element={<WeeklyAnnouncements />} />
          <Route path="/Calendario" element={<Calendario />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Familia" element={<Familia />} />
          <Route path="/ManitosMentorshipProgram" element={<ManitosMentorshipProgram />} />
          <Route path="/Outreach" element={<Outreach />} />
          <Route path="/Professionalism" element={<Professionalism />} />
          <Route path="/Network" element={<Network />} />
          <Route path="/SHPE-tinas" element={<SHPEtinas />} />
          <Route path="/SHPENationalConvention" element={<SHPENationalConvention />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Forums" element={<Forums />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Signup />} />
          <Route path="/NewForum" element={<NewForum />} />
          <Route path="/Forum" element={<Forum />} />

      </Routes>
  );
}

export default Navigation;