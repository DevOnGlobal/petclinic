#!groovy
pipeline {
  agent none
  stages {
    stage('Build') {
      agent { docker 'maven' }
      steps {
        sh "mvn -B clean install"
        junit '**/target/surefire-reports/*.xml'
        dir('target') {
          stash includes: '*.war', name: 'war'
        }
      }
    }
    stage('Test') {
        agent any
        steps {
            unstash 'war'
            sh 'curl -u deploy:cdtraining --upload-file petclinic.war "http://psdcdpolitie_tomcat-test_1:8080/manager/text/deploy?path=/petclinic&update=true"'
        }
    }
    stage('Acceptance') {
        agent any
        steps {
            unstash 'war'
            sh 'curl -u deploy:cdtraining --upload-file petclinic.war "http://psdcdpolitie_tomcat-acc_1:8080/manager/text/deploy?path=/petclinic&update=true"'
            input 'Continue to Production?'
        }
    }
    stage('Production') {
        agent any
        steps {
            unstash 'war'
            sh 'curl -u deploy:cdtraining --upload-file petclinic.war "http://psdcdpolitie_tomcat-prod_1:8080/manager/text/deploy?path=/petclinic&update=true"'
        }
    }
  }
}