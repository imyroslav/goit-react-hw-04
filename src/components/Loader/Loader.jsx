import { Watch } from 'react-loader-spinner';
import css from "./Loader.module.css"

export default function Loader() {
  return (
      <div className={css.loader}>
          <Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="hsl(132, 77%, 40%"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
       
    )
}