import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar ,faTaxi,faPlane, faCalendarDays, faPerson, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom"

export const Header = ({type}) => {
    
    const [destination,setDestination] = useState("");
    function handleInputChange(value) {
      setDestination(value);
    }
  
    function handleSpeechRecognition() {
      const recognition = new window.webkitSpeechRecognition();
      recognition.start();
  
      recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        setDestination(destination + " " + result);
      }
    }
    
     
    const [OpenDate,SetOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions,SetOpenOptions] = useState(false)
      const [options,SetOptions] = useState ({
        adult:1,
        children:0,
        room:1,
      });
      const navigate = useNavigate()
      const handleOption = (name,operation) =>{
        SetOptions((prev) =>{
            return {
                ...prev,
                [name]:operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
      }; 
      
      const handleSearch = () => {
        navigate("/hotels",{state:{destination,date,options}});
      }

  return (
    <div className="header">
         <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
           
            <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div> <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxies</span>
            </div>
            </div>

            { type !== "list" &&
                <> 
                <h1 className="headerTitle"> Unlock a world of savings with our lifetime discount program - sign up now!</h1>
            <p className="headerDesc">
            Ready to unlock incredible travel discounts? Sign up for a mybooking account today - it's free and easy!

            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type="text" placeholder="Where are you going?" className="headerSearchInput" value={destination} onChange={(e) => handleInputChange(e.target.value)}   />
                </div>
                <div>                 
                 <button className="voice-button" onClick={handleSpeechRecognition}> <FontAwesomeIcon icon={faMicrophone} /></button>
               </div>
           
            
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span className="headerSearchText" onClick={()=>SetOpenDate(!OpenDate)}>{` ${ format(date[0].startDate, "MM-dd-yyyy")} to 
                ${format(date[0].endDate, "MM-dd-yyyy")}
                `}</span>
               { OpenDate &&<DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                />}

                </div>
            
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick={()=>SetOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult | ${options.children} children | ${options.room} room `}</span>
                { openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optioncounter">
                        <button
                        disabled={options.adult <=1} 
                        className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                        <span className="optionText">{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                        </div>

                    </div>

                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optioncounter">
                        <button 
                         disabled={options.children <=0} 
                        className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                        <span className="optionText">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                        </div>

                    </div>

                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optioncounter">
                        <button
                         disabled={options.room <=1} 
                        className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                        <span className="optionText">{options.room}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>}
                </div>

                <div className="headerSearchItem">
               
                <button className="headerBtn1" onClick={handleSearch}>Search</button>
                </div>
            
            </div>
    </>}
            
           
        </div>
    </div>
  )
}


