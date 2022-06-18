import React, { useEffect, useState} from 'react';
import { RecoilRoot } from "recoil";
import { createGlobalStyle,ThemeProvider } from 'styled-components';
import { theme } from './theme';
import AppRouter from "./Router";
import Web3 from 'web3'
import { CONTACT_ABI, CONTACT_ADDRESS } from './Routes/config';


const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

`;

function App() {
  const [init, setInit] = useState(false);
  // const [account, setAccount] = useState();
  // const [contactList, setContactList] = useState();
  // const [contacts, setContacts] = useState([]);

  const [contract, setContract] = useState({});
  const [User, setUser] = useState("");
  const [View_Id, setView_Id] = useState(0);
  const [Add_Id, setAdd_Id] = useState(0);
  const [Add_Name, setAdd_Name] = useState("");
  const [Add_Age, setAdd_Age] = useState(0);
  const [Balance, setBalance] = useState(0);


  useEffect(() => {
    setInit(true);
    initWeb3();
  }, []);

  const initWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.web3.currentProvider);
      try {
        await window.ethereum.enable();
        console.log(`✅ Connected Properly`)
      } catch (err) {
        console.log(`❌ ETH NONO!`,err)
      }
    } else {
      console.log("no !!!!!")
    }

    window.web3.eth.getAccounts().then(res => {
      console.log(`현재 사용자 : ${res[0]}`);
      setUser(res[0]);
    });

    console.log("CP:", window.web3.currentProvider);
    setContract(new window.web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS));
    console.log(CONTACT_ADDRESS);
    console.log(CONTACT_ABI);
    console.log(contract);
};

const setAccount = async () => {
  await contract.methods.testWeb3().call({from:User}).then(result => {
    console.log(result);
    //칸 초기화
  })
 
};




  return (
    <>
      {init ? 
      <ThemeProvider theme={theme}>

        <RecoilRoot>
          <GlobalStyle />
          <button
            onClick={setAccount}>
            <span>로그아웃</span>
          </button>
          <AppRouter/>
        </RecoilRoot> 
      </ThemeProvider>
      : 
        "Initializing..."
      }
    </> 
  );
}

export default App;
