PUT /searchbox/files/_mapping
{
    "person" : {
        "properties" : {
            "file" : {
                "type" : "attachment",
                "fields" : {
                    "file" : {"type":"string", "store":true, "term_vector":"with_positions_offsets"},
                    "title" : {"store" : "yes"},
                    "date" : {"store" : "yes"},
                    "author" : {"analyzer" : "myAnalyzer"},
                    "keywords" : {"store" : "yes"},
                    "content_type" : {"store" : "yes"},
                    "content_length" : {"store" : "yes"},
                    "language" : {"store" : "yes"}
                }
            }
        }
    }
}
