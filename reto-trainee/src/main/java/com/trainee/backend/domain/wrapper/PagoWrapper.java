package com.trainee.backend.domain.wrapper;


import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import com.trainee.backend.domain.dto.PagoDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@JacksonXmlRootElement(localName = "Pagos")
@Getter
@Setter
public class PagoWrapper {

    @JacksonXmlElementWrapper(useWrapping = false)
    private List<PagoDto> pago;
}
