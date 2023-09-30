import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect , useState} from 'react';

export default function HomeList () {
    const [avatarUrl, setAvatarURL] = useState();
    const [avatarUrl2, setAvatarURL2] = useState();
    const [avatarUrl3, setAvatarURL3] = useState();
    const [avatarUrl4, setAvatarURL4] = useState();
  
    const [username, setUsername] =useState();
    const [username2, setUsername2] =useState();
    const [username3, setUsername3] =useState();
    const [username4, setUsername4] =useState();
  
    const [name, setname] =useState();
    const [name2, setname2] =useState();
    const [name3, setname3] =useState();
    const [name4, setname4] =useState();

      useEffect (() => {
    fetch("https://api.github.com/users/nategurian")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setUsername(result.login);
          setname(result.name);
        },
        (error) => {
          console.log(error);
        }
      );

      fetch("https://api.github.com/users/mbarajas")
      .then((res) => res.json())
      .then(
        (result2) => {
          console.log(result2);
          setAvatarURL2(result2.avatar_url);
          setUsername2(result2.login);
          setname2(result2.name);
        },
        (error) => {
          console.log(error);
        }
      );

      fetch("https://api.github.com/users/alexgrant117")
      .then((res) => res.json())
      .then(
        (result3) => {
          console.log(result3);
          setAvatarURL3(result3.avatar_url);
          setUsername3(result3.login);
          setname3(result3.name);
        },
        (error) => {
          console.log(error);
        }
      );

      fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then(
        (result4) => {
          console.log(result4);
          setAvatarURL4(result4.avatar_url);
          setUsername4(result4.login);
          setname4(result4.name);
        },
        (error) => {
          console.log(error);
        }
      );

  }, [] )


    return (
        <div style={{ display: 'inline', float: 'left', width: "350px" }}>
        <p class="text-center">
            <h1 style={{color: 'blue' }}> List of People</h1>
        </p>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href={"/users/"+ username} >
                    <p class="text-center">
                    {name} {' ' }
                    "{username}" {""}
                    <img src={avatarUrl} height={50} width={50}/>
                    </p>
            </ListGroup.Item>
            <ListGroup.Item action href={"/users/"+ username2}>
                    <p class="text-center">
                    {name2} {" "} 
                    "{username2}" {" "}
                    <img src={avatarUrl2} height={50} width={50}/>
                    </p>
             </ListGroup.Item>
            <ListGroup.Item action href={"/users/"+ username3}>
                    <p class="text-center">
                    {name3} {" "}
                    "{username3}" {" "}
                    <img src={avatarUrl3} height={50} width={50}/>
                    </p>
            </ListGroup.Item>
            <ListGroup.Item action href={"/users/"+ username4}>
                    <p class="text-center">
                    {name4} {" "}
                    "{username4}" {" "}
                    <img src={avatarUrl4} height={50} width={50}/>
                    </p>
            </ListGroup.Item> 
    </ListGroup>
    </div>
    );
}