FROM datacom/java:openjdk7

ENV MANIFOLDCF_VERSION 1.7.2
ENV MANIFOLD_GZIP apache-manifoldcf-$MANIFOLDCF_VERSION-bin.tar.gz

RUN wget -qP /tmp/ http://apache.mirror.uber.com.au/manifoldcf/$MANIFOLD_GZIP &&\
    tar zxvf /tmp/$MANIFOLD_GZIP &&\
    mv apache-manifoldcf-$MANIFOLDCF_VERSION /opt/manifoldcf &&\
    rm /tmp/$MANIFOLD_GZIP

WORKDIR /opt/manifoldcf

# so much cleanup!
RUN rm -rf doc &&\
    rm -rf test-lib &&\
    rm -rf multiprocess-file-example &&\
    rm -rf multiprocess-zk-example &&\
    rm -rf script-engine &&\
    rm -rf documentum-registry-process &&\
    rm -rf documentum-server-process &&\
    rm -rf elasticsearch-integration &&\
    rm -rf lib-proprietary &&\
    rm -rf meridio-integration &&\
    rm -rf sharepoint-integration &&\
    rm -rf solr-integration &&\
    rm -rf filenet-registry-process &&\
    rm -rf filenet-server-process &&\
    rm connector-lib-proprietary/* &&\
    rm connector-build.xml &&\
    rm NOTICE.txt &&\
    rm README.txt &&\
    rm DEPENDENCIES.txt &&\
    mv example bin &&\
    rm bin/*.bat &&\
    rm bin/combined-options.env.win &&\
    mv bin/start-combined.sh bin/start.sh &&\
    rm bin/properties.xml &&\
    rm connectors.xml &&\
    chmod +x bin/start.sh

COPY connectors.xml /opt/manifoldcf/connectors.xml
COPY properties.xml /opt/manifoldcf/bin/properties.xml
COPY jcifs-1.3.18.jar /opt/manifoldcf/connector-lib-proprietary/jcifs-1.3.18.jar

WORKDIR /opt/manifoldcf/bin

CMD ["/opt/manifoldcf/bin/start.sh"]

EXPOSE 8345
