#!groovy
pipeline {
  agent any
  tools {
    maven 'apache-maven-3.5.0' 
  }  
  stages {
    stage('Build') {
      steps {
        withSonarQubeEnv('default') {
          sh "mvn -B clean install sonar:sonar"
        }
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
            dir ('uitests') {
                sh "mvn -DappUrl=psdcdpolitie_tomcat-test_1:8080/petclinic -DremoteUrl=http://selenium-hub:4444/wd/hub test"
            }
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