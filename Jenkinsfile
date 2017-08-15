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
    sh 'kubectl config use-context test'
    sh "sed 's#:latest#:${env.BUILD_NUMBER}#' kubernetes/deployments/app.yaml | kubectl apply -f -"
    sh 'kubectl rollout status deployment/hello'
    
    dir ('uitests') {
      def maven = tool name: 'default', type: 'maven'
      sh "${maven}/mvn test -DappUrl=https://test.tddcyclecounter.nl -DremoteUrl=http://172.17.0.5:444/wd/hub"
    }
  }
}
stage('Prod') {
  input 'Go to production?'
  node {
    checkout scm
    sh 'kubectl config use-context prod'
    sh "sed 's#:latest#:${env.BUILD_NUMBER}#' kubernetes/deployments/app.yaml | kubectl apply -f -"
    sh 'kubectl rollout status deployment/hello'
  }
}
