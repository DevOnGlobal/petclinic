#!/bin/bash
curl -u deploy:cdtraining --upload-file petclinic.war "http://$1:8080/manager/text/deploy?path=/petclinic&update=true"
