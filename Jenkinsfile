#!groovy
pipeline {
  agent any
  stages {
    stage('Commit') {
      steps {
        var image = docker.build('harmpauw/petclinic')
        docker.withRegistry([credentialsId: '049c1148-da4a-4f18-a532-94188658e28c']) {
          image.push()
        }
      }
    }
    stage('Test') {
        agent any
        steps {
            sh 'kubectl apply -f kubernetes/deployments/app.yaml'
        }
    }
  }
}
