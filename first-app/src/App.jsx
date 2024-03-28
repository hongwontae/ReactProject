import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const data = [
  {
    id: 1,
    imgName:
      "https://i.namu.wiki/i/4GGMR1n18RQH9Q4DIZjpIrAT0m9jJPK6FXBbPpJPAFlfYXo3PKZobLajKFAdbFCKAZLbZOkSHIYVQsHWjyP53Mc147rKdErqEeGvJGBbcMOgM3SfF694Jp73cQeWatOptzp6SE8EiL2rSanj2VULxA.webp",
    altName: "Mac Alister",
    title: "Mac Alister",
    desc: "프리미어 리그 이달의 골: 2023년 12월",
  },
  {
    id: 2,
    imgName:
      "https://i.namu.wiki/i/MOVpU_8yygTcGmNwp1Hzhc71ib0tESIFmFVmfk3aiBd_8nWSXbg6nVwV0aNqBIneTRD91MHZ-dbJE_LcBqg2MB6wjEhsFpm5AH-UGUPRgCJgJuZbbSTN5OO2mqoOmUQ3UmSZ6pkjybUjQqERPAQZVw.webp",
    altName: "Darwin Nunez",
    title: "Darwin Nunez",
    desc: "CNID 올해의 선수: 2022",
  },
  {
    id: 3,
    imgName: "https://i.namu.wiki/i/XkAzXELeHvnHimy616kwGwZNVNiQSWLKuCCWEP1NoZaIxZcGIdddjUbJH1fQA8Xft2BbcWZJuRCuBeKhXvoOx8zXiRowfK64oD2lQhBk6NoMazRfmw_5m3xNKQT1_A1RpRdIZSvvQoy2_MpYYZhb8g.webp",
    altName: "Luis Diaz",
    title: "Luis Diaz",
    desc: "프리메이라리가 페어플레이상: 2020-21",
  },
  {
    id: 4,
    imgName: "https://i.namu.wiki/i/slysWmTrrSBnB1db2CU7RnHchn8BXWYCEWmHirZcXQJzW7fO4a_pdFXDJ1_r_ZepMrG6HMgyud4-9M5jJuUkjEAEMhUDyAO60Ukj7qJpO3lg6fm_TonsLs285PBmlkp0rOqXkmxchEhcgGaGoihuQw.webp",
    altName: "Alexander",
    title: "Alexander",
    desc: "크로스와 중거리슛, 중거리 패스 등에 모두 상당히 능하다.",
  },
  {
    id: 5,
    imgName: "https://i.namu.wiki/i/jnohqIVF__Ga7fb7EtTRkOz-H6jFD3jx8QcH3CwoNBDTWBiOXR2Ne8IAIXSnWkEmxqlx9PYIXpuUylea8v21Hn587TnmHFareMh8MHDW1eSJLVDQygpBAMSrGqCNrfbbx069wxTVGjqW-Q6Tyu5vXw.webp",
    altName: "Conor bradley",
    title: "Conor bradley",
    desc: "또한 좋은 주력과 풀백으로서는 괜찮은 신장을 활용한 수비로 상대 공격수와의 경합에서 적극적으로 임하며 태클능력도 꽤 좋다. ",
  },
];

function App() {
  const [refresh, setRefresh] = useState();

  return (
    <>
      <Header></Header>
      <Main data={data}></Main>
    </>
  );
}

export default App;
