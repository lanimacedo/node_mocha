pipeline {
  agent {
    docker {
      image "node:8-alpine"
    }
  }
  stage("Build") {
    steps {
      sh "npm install"
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
