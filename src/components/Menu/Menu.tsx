import { Course, menu, MenuSection } from "../../assets/menu";
import { H1, H3, H4 } from "../styled/Headings";
import { P, PCursive } from "../styled/TextTags";
import { MenuWrapper } from "../styled/Wrappers";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <H1>Encanto</H1>
      <H4>Restaurant Reservation</H4>
      <br></br>
    
         
          <input
            type="Text"/>
            <br></br>
            <Link to="/search">
       
        
           <button >Search</button></Link>
       <H3>Recommended Restaurants</H3>
      <MenuWrapper>
        {Object.values(menu).map((section: MenuSection) => (
          <div key={section.name}>
            <h4>{section.name}</h4>
            <div>
              {section.courses.map((course: Course) => (
                <div key={course.name}>
                  <P>{course.name}</P>
                  <PCursive>{course.description}</PCursive>
                  <div>{course.price}:-</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </MenuWrapper>
    </>
  );
};
