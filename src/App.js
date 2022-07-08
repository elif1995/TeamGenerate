import { Breadcrumb, Layout, Menu, Button, Modal, Rate, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

import './App.css';

const { Header, Sider, Content, Footer } = Layout;

const PLLIST = [
  {
    id: 0,
    name: 'Loading...',
    stars: 0,
    icon: ''
  },
  {
    id: 1,
    name: 'Manchester City',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/10.png'
  },
  {
    id: 2,
    name: 'Liverpool',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/9.png'
  },
  {
    id: 3,
    name: 'Chelsea',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/5.png'
  },
  {
    id: 4,
    name: 'Manchester United',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/11.png'
  },
  {
    id: 5,
    name: 'Tottenham Hotspur',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/18.png'
  },
  {
    id: 6,
    name: 'Leicester City',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/95.png'
  },
  {
    id: 7,
    name: 'Arsenal',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1.png'
  },
  {
    id: 8,
    name: 'West Ham United',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/19.png'
  },
  {
    id: 9,
    name: 'Aston Villa',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/2.png'
  },
  {
    id: 10,
    name: 'Wolverhampton Wanderers',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/110.png'
  },
  {
    id: 11,
    name: 'Everton',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/7.png'
  },
  {
    id: 12,
    name: 'Newcastle United',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/13.png'
  },
  {
    id: 13,
    name: 'Leeds United',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/8.png'
  },
  {
    id: 14,
    name: 'Crystal Palace',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1799.png'
  },
  {
    id: 15,
    name: 'Burnley',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1796.png'
  },
  {
    id: 16,
    name: 'Southampton',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/17.png'
  },
  {
    id: 17,
    name: 'Brighton & Hove Albion',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1808.png'
  },
  {
    id: 18,
    name: 'Brentford',
    stars: 3.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1925.png'
  },
  {
    id: 19,
    name: 'Watford',
    stars: 3.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1795.png'
  },
  {
    id: 20,
    name: 'Norwich City',
    stars: 3.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1792.png'
  },
  
]

const LALIGALIST = [
  {
    id: 0,
    name: 'Loading...',
    stars: 0,
    icon: ''
  },
  {
    id: 1,
    name: 'Real Madrid',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/243.png'
  },
  {
    id: 2,
    name: 'FC Barcelona',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/241.png'
  },
  {
    id: 3,
    name: 'Sevilla FC',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/481.png'
  },
  {
    id: 4,
    name: 'Real Sociedad',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/457.png'
  },
  {
    id: 5,
    name: 'Villarreal CF',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/483.png'
  },
  {
    id: 6,
    name: 'Real Betis Balompié',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/449.png'
  },
  {
    id: 7,
    name: 'Athletic Club de Bilbao',
    stars: 4.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/448.png'
  },
  {
    id: 8,
    name: 'RCD Espanyol',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/452.png'
  },
  {
    id: 9,
    name: 'Valencia CF',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/461.png'
  },
  {
    id: 10,
    name: 'Granada CF',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/110832.png'
  },
  {
    id: 11,
    name: 'RC Celta de Vigo',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/450.png'
  },
  {
    id: 12,
    name: 'Levante UD',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1853.png'
  },
  {
    id: 13,
    name: 'CA Osasuna',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/479.png'
  },
  {
    id: 14,
    name: 'Getafe CF',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1860.png'
  },
  {
    id: 15,
    name: 'Cádiz CF',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/1968.png'
  },
  {
    id: 16,
    name: 'Deportivo Alavés',
    stars: 4,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/463.png'
  },
  {
    id: 17,
    name: 'RCD Mallorca',
    stars: 3.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/453.png'
  },
  {
    id: 18,
    name: 'Rayo Vallecano',
    stars: 3.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/480.png'
  },
  {
    id: 19,
    name: 'Elche CF',
    stars: 3.5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/468.png'
  },
  {
    id: 20,
    name: 'Atlético de Madrid',
    stars: 5,
    icon: 'https://fifastatic.fifaindex.com/FIFA22/teams/light/240.png'
  },
  
]


function App() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 100,
      }}
      spin
    />
  );


  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [randomNum, setRandomNum] = useState(0)
  const [delay, setDelay] = useState(false)

  
  

  const HandleRandom = () => {
    setTimeout(() => {
    const NumGenerator = Math.floor((Math.random() * 20) +1 );
    console.log(NumGenerator)
    setRandomNum(NumGenerator);
    
  }, 2000)
  
    setRandomNum(0)
  }

  
  
  return (
    <div>
      <Layout className="layout">
    <Header>
    
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(1).fill(null).map((_, index) => {
          const key = index + 1;
          return {
           
            label: `Home`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
       
      </Breadcrumb>
      <div className="site-layout-content">
      <Button style={{
        height: '200px',
        width: '100%',
      }}
       size="large" type="primary" onClick={() => {setModal2Visible(true);HandleRandom(); }}>
        <h1>PL Generate</h1>
      </Button>
      <br/>
      <br/>
      <Button style={{
        height: '200px',
        width: '100%',
      }}
       size="large" type="primary" danger onClick={() => {setModal1Visible(true);HandleRandom(); }}>
        <h1>LaLiga Generate</h1>
      </Button>
      <Modal
        title="Your Team"
        style={{ top: 20 , display: 'flex', justifyContent: 'center' , alignItems: 'center'}}
        width="300px"
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
      >
        {/* {PLLIST.map(({name,icon,stars}) => (<div><h1>{name}</h1><img src={icon} /><Rate disabled allowHalf defaultValue={stars} /></div>))} */}
        {randomNum == 0 ? <Spin indicator={antIcon} /> : (<div><h1>{PLLIST[randomNum].name}</h1>
        <img style={{display:'block'}} src={PLLIST[randomNum].icon} />
        <Rate disabled allowHalf value={PLLIST[randomNum].stars} /></div>)}
      </Modal>
      <Modal
        title="Your Team"
        style={{ top: 20 , display: 'flex', justifyContent: 'center' , alignItems: 'center'}}
        width="300px"
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        {/* {PLLIST.map(({name,icon,stars}) => (<div><h1>{name}</h1><img src={icon} /><Rate disabled allowHalf defaultValue={stars} /></div>))} */}
        {randomNum == 0 ? <Spin indicator={antIcon} /> : (<div><h1>{LALIGALIST[randomNum].name}</h1>
        <img style={{display:'block'}} src={LALIGALIST[randomNum].icon} />
        <Rate disabled allowHalf value={LALIGALIST[randomNum].stars} /></div>)}
      </Modal>
        
        
        </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2022 Created by Eli Frenkin
    </Footer>
  </Layout>
    </div>
  );
};

export default App;
