var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

function highlighthtml(files) {
  text = ''
  for (i in files) {
    text = text + files[i] + '<br>'
  }
  return text;
}

function process_response(response,a,b,c) {
  results_el = d3.select('#results').selectAll('p').data(response.hits.hits)
  results_el.enter().append('p')
  results_el.exit().remove()
  results_el.html(function(d) { return '<div class="result"><div class="path">' + d._id + '</div><div class="highlight">' + highlighthtml(d.highlight.file) + "</div></div>"})
}

function error(response) {
  console.log('ERROR', response)
}

function searchme() {
  text = d3.select('#searchbox')[0][0].value;
  
  query = {
    "query": {
      "match": {
        "file": text
      }
    },
    "highlight": {
      "fields": {
        "file": {
        }
      }
    }
  }
  
//  client.request({
//    method:'get',
//    path:'/test/person/_search',
//    query: JSON.stringify(query)
//  }).then(process_response, error)
  
  client.search({
    index: 'test',
    type: 'person',
    "fields": [], 
    "body": query
//    "query": {
//      "match": {
//        "file": text
//      }
//    },
//    "highlight": {
//      "fields": {
//        "file": {
//        }
//      }
//    }
  }).then(process_response)
//  client.search({
//    index: 'test',
//    type: 'person',
//    "fields": [], 
//    "q": text,
//    "highlight": {
//      "fields": {
//        "file": {
//        }
//      }
//    }
//  }).then(process_response)
  return false;
}