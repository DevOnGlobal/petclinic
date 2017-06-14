#!groovy
pipeline {
  agent { docker 'maven' }
  stages {
    stage('Build') {
      steps {
        sh "mvn -B clean install"
        junit '**/target/surefire-reports/*.xml'
      }
    }    
  }
}