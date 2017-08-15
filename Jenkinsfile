#!groovy

stage('Commit') {
  node {
    checkout scm
    
    def image = docker.build('harmpauw/petclinic')
    docker.withRegistry('https://index.docker.io/v1/','b7dafb21-aace-43b3-b765-f63a508085b2') {
      image.push("${env.BUILD_NUMBER}")
    }
  }
}

stage('Test') {
  node {
    checkout scm
    sh 'kubectl use-context test'
    sh "sed 's#:latest#:${env.BUILD_NUMBER}#' kubernetes/deployments/app.yaml | kubectl apply -f -"
    sh 'kubectl rollout status deployment/hello'
  }
}
stage('Prod') {
  input 'Go to production?"
  node {
    checkout scm
    sh 'kubectl use-context default'
    sh "sed 's#:latest#:${env.BUILD_NUMBER}#' kubernetes/deployments/app.yaml | kubectl apply -f -"
    sh 'kubectl rollout status deployment/hello'
  }
}
