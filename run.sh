docker kill postgresql
docker kill elasticsearch
docker kill manifold
docker rm postgresql
docker rm elasticsearch
docker rm manifold

docker run --name postgresql datacom/postgres &
docker run --name elasticsearch -p 9200:9200 searchbox/elasticsearch &

#wait for docker to register the names
sleep 2
docker run --name manifold -p 8345:8345 --link postgresql:postgresql --link elasticsearch:elasticsearch searchbox/manifold &



