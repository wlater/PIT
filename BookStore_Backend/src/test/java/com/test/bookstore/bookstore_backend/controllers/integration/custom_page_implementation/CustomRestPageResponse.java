package com.test.bookstore.bookstore_backend.controllers.integration.custom_page_implementation;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public class CustomRestPageResponse<T> extends PageImpl<T> {

    @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
    public CustomRestPageResponse(@JsonProperty("content") List<T> content,
                                  @JsonProperty("number") int number,
                                  @JsonProperty("size") int size,
                                  @JsonProperty("totalElements") Long totalElements,
                                  @JsonProperty("pageable") JsonNode pageable,
                                  @JsonProperty("last") boolean last,
                                  @JsonProperty("totalPages") int totalPages,
                                  @JsonProperty("sort") JsonNode sort,
                                  @JsonProperty("first") boolean first,
                                  @JsonProperty("numberOfElements") int numberOfElements) {

        super(content, PageRequest.of(number, size), totalElements);
    }

//    public CustomRestPageResponse(List<T> content, Pageable pageable, long total) {
//        super(content, pageable, total);
//    }
//
//    public CustomRestPageResponse(List<T> content) {
//        super(content);
//    }
}