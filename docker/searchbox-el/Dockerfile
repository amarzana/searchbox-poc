FROM datacom/java:openjdk7

ENV ES_VERSION 1.3.5

RUN wget -qP /tmp/ https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-$ES_VERSION.tar.gz &&\
    tar zxvf /tmp/elasticsearch-$ES_VERSION.tar.gz &&\
    mv elasticsearch-$ES_VERSION /opt/elasticsearch &&\
    rm /tmp/elasticsearch-$ES_VERSION.tar.gz

WORKDIR /opt/elasticsearch

RUN wget -qP /tmp/ https://download.elasticsearch.org/elasticsearch/marvel/marvel-latest.zip &&\
    bin/plugin -i marvel -u file:///tmp/marvel-latest.zip &&\
    bin/plugin -install elasticsearch/elasticsearch-mapper-attachments/2.3.2 &&\
    rm /tmp/marvel-latest.zip

COPY elasticsearch.yml /opt/elasticsearch/config/elasticsearch.yml
COPY logging.yml /opt/elasticsearch/config/logging.yml

VOLUME ["/opt/elasticsearch/config", "/var/lib/elasticsearch", "/var/log/elasticsearch"]

CMD ["/opt/elasticsearch/bin/elasticsearch"]

# Expose ports.
#   - 9200: HTTP
#   - 9300: transport
EXPOSE 9200
EXPOSE 9300
