#!groovy
pipeline {
  agent any
  stages {
    stage('Commit') {
      steps {
        def image = docker.build('harmpauw/petclinic')
        docker.withRegistry('https://index.docker.io/v1/','049c1148-da4a-4f18-a532-94188658e28c') {
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
