import { Switch, Route } from 'react-router-dom'
import { paths } from './CONSTANTS'

import HomePage from 'pages/HomePage/HomePage'
import ProfilePage from 'pages/ProfilePage/ProfilePage'
import MoviePage from 'pages/MoviePage/MoviePage'


const ConfigRouter = () => {
  return (
    <Switch>
      <Route exact path={paths.HOME} component={HomePage} />
      <Route exact path={paths.PROFILE} component={ProfilePage} />
      <Route path={`${paths.MOVIE}/:movieId`} component={MoviePage} />

      <Route path="*">
        <div>
          404
        </div>
      </Route>
    </Switch>
  )
}

export default ConfigRouter
