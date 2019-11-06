pipeline {
  agent {
    docker {
      image "node:8-alpine"
    }
  }
  stages {
    stage("Build") {
      steps {
        sh "npm run test:ci"
      }
    }
    stage("Test") {
      steps {
        script {
          switch(env.JOB_NAME) {
            case "Test 1":
              suite = 'test1'
            break
            case "Test 2":
              suite = 'test2'
            break
          }
        }
        sh "npm run ${suite}"
      }
      post {
        always {
          junit "log/*.xml"
        }
      }
    }
    
  }
}
