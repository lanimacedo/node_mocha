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
