import { useState } from "react";
export default function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Inputbox></Inputbox>
      </div>
    </div>
  );
}

function Header() {
  // state variables (not hardcoded)
  let studentname = "Ayush ";
  let studentid = "210940320030";
  return (
    <div>
      <div className="row bg-dark text-light">
        <div className="col-2  fs-4 p-3">
          <h3>MyChatApp</h3>
        </div>
        <div className="col m-4">
          by {studentname},{studentid}
        </div>
      </div>
    </div>
  );
}

function Inputbox() {
  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  const inputmsg = (e) => {
    setmsg(e.target.value);
  };

  const sendmsg = () => {
    const newlist = [msg, ...list];
    setlist(newlist);
  };
  return (
    <div>
      <div className="form-control form-control-lg m-1 ">
        <input type="text" placeholder="Lets chat here.." onChange={inputmsg} />
        <input className=" m-2" type="button" value="SEND" onClick={sendmsg} />
      </div>
      <div>
        {list.map(() => (
          <div className="bg-secondary mt-2">{list}</div>
        ))}
      </div>
    </div>
  );
}
