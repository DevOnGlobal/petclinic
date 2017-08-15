#!/bin/bash
curl -u deploy:cdtraining --upload-file $1 "http://$2:8080/manager/text/deploy?path=/petclinic&update=true"
