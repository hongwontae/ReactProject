import classes from './main.module.css'

function Main(props) {
  return (
    <>
      <main className={classes.main__info}>
        {props.data.map((ele, idx, arr) => {
          return (
            <ul className={classes.photo__info} key={ele.id}>
              <li>
                <h3>{ele.title}</h3>
                <img src={ele.imgName} alt={ele.altName}></img>
                <p>{ele.desc}</p>
              </li>
            </ul>
          );
        })}
      </main>
    </>
  );
}

export default Main;
