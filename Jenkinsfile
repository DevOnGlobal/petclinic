#!groovy
pipeline {
  agent { docker 'maven' }
  stages {
    stage('Build') {
      steps {
        sh "mvn -B clean install sonar:sonar"
        junit '**/target/surefire-reports/*.xml'
      }
    }    
  }
}