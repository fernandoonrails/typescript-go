//// [tests/cases/compiler/privacyGloClass.ts] ////

//// [privacyGloClass.ts]
module m1 {
    export interface m1_i_public {
    }

    interface m1_i_private {
    }

    export class m1_c_public {
        private f1() {
        }
    }

    class m1_c_private {
    }

    class m1_C1_private extends m1_c_public {
    }
    class m1_C2_private extends m1_c_private {
    }
    export class m1_C3_public extends m1_c_public {
    }
    export class m1_C4_public extends m1_c_private {
    }

    class m1_C5_private implements m1_i_public {
    }
    class m1_C6_private implements m1_i_private {
    }
    export class m1_C7_public implements m1_i_public {
    }
    export class m1_C8_public implements m1_i_private {
    }

    class m1_C9_private extends m1_c_public implements m1_i_private, m1_i_public {
    }
    class m1_C10_private extends m1_c_private implements  m1_i_private, m1_i_public {
    }
    export class m1_C11_public extends m1_c_public implements  m1_i_private, m1_i_public {
    }
    export class m1_C12_public extends m1_c_private implements  m1_i_private, m1_i_public {
    }
}

interface glo_i_public {
}

class glo_c_public {
    private f1() {
    }
}

class glo_C3_public extends glo_c_public {
}

class glo_C7_public implements glo_i_public {
}

class glo_C11_public extends glo_c_public implements glo_i_public {
}


//// [privacyGloClass.js]
var m1;
(function (m1) {
    class m1_c_public {
        f1() {
        }
    }
    m1.m1_c_public = m1_c_public;
    class m1_c_private {
    }
    class m1_C1_private extends m1_c_public {
    }
    class m1_C2_private extends m1_c_private {
    }
    class m1_C3_public extends m1_c_public {
    }
    m1.m1_C3_public = m1_C3_public;
    class m1_C4_public extends m1_c_private {
    }
    m1.m1_C4_public = m1_C4_public;
    class m1_C5_private {
    }
    class m1_C6_private {
    }
    class m1_C7_public {
    }
    m1.m1_C7_public = m1_C7_public;
    class m1_C8_public {
    }
    m1.m1_C8_public = m1_C8_public;
    class m1_C9_private extends m1_c_public {
    }
    class m1_C10_private extends m1_c_private {
    }
    class m1_C11_public extends m1_c_public {
    }
    m1.m1_C11_public = m1_C11_public;
    class m1_C12_public extends m1_c_private {
    }
    m1.m1_C12_public = m1_C12_public;
})(m1 || (m1 = {}));
class glo_c_public {
    f1() {
    }
}
class glo_C3_public extends glo_c_public {
}
class glo_C7_public {
}
class glo_C11_public extends glo_c_public {
}
