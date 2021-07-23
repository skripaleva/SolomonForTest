import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Octokit } from '@octokit/rest';
import styles from '../App/App.module.css'

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'Solomon7and7',
    }).then(({data}) => {
      this.setState({
        repoList: data,
        isLoading: false,
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error
        })
      })

    octokit.users.getByUsername({
      username: 'Solomon7and7',
    }).then(({data}) => {
      this.setState({
        infoUser: data
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error
        })
       })
  }

  render() {
    const { isLoading, repoList, infoUser, errorMessage, isError } = this.state;

    return (
      <div>
        {isLoading ?
          <div> <LinearProgress color="secondary" /> <LinearProgress color="secondary" /> </div>
         :
          <div>
            <h1 className={styles.title}> Обо мне</h1>
            {isError ?
              'Упс! Что-то пошло не так: ' + errorMessage
             :
              <div>
                <div>
                  {infoUser === undefined ?
                    'Информация не найдена'
                   :
                    <img
                      src={infoUser.avatar_url}
                      alt="Avatar"
                      width={'30%'}
                      height={'30%'}
                    />
                  }
                  <h2>
                    {infoUser === undefined ? ' Информация не найдена' : infoUser.name}
                  </h2>
                  <p>
                    {infoUser === undefined ? ' Информация не найдена' : infoUser.bio}
                  </p>
                </div>

                <h3>Мои репозитории:</h3>
                <ol>
                  {repoList === undefined
                    ? 'Информация не найдена'
                    : repoList.map((repo) => (
                      <li className={styles.repoList} key={repo.id}>
                        <a className={styles.repoLinks} target="_blank" rel = "noreferrer" href={repo.html_url}>{repo.name}</a>
                        <a className={styles.repoLinks} target="_blank" rel = "noreferrer" href={`https://Solomon7and7.github.io/${repo.name}/`}> холдинг репозитория </a>
                      </li>
                    ))}
                </ol>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default About;