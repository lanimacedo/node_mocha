pipeline {
  agent {
    docker {
      image "node:8-alpine"
    }
  }
  stages {
    stage("Test") {
      steps {
        sh "npm run test"
      }
      post {
        always {
          junit "log/*.xml"
        }
      }
    }
  }
}
