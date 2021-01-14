class long_bit_map {
        constructor( int_size ) {
            this.__length = int_size ;
            this.__size = ( int_size >> 5 ) + 1 ;
            this.__map = new Array( this.__size ) ;
        } ;
        get ( index ) {
            return ( index >> 5 ) < this.__size && ( ( this.__map[ index >> 5 ] >> ( index & 31 ) ) & 1 ) == 1 ;
        }
        set ( index, boolean ) {
            return ( index >> 5 ) < this.__size
                ? ( this.__map[ index >> 5 ] = ( this.__map[ index >> 5 ] & ( 4294967295 ^ ( 1 << ( index & 31 ) ) ) ) | ( boolean ? 1 << ( index & 31 ) : 0 ) , true )
                : false
            ;
        }
        or ( long_bitmap, _this = false ) {
            let ret = _this ? this : new long_bit_map( this.__length ) ;
            if ( this.__length == long_bitmap.__length ) {
                for ( let i = 0 ; i < this.__size ; i++ ) {
                    ret.__map[ i ] = this.__map[ i ] | long_bitmap.__map[ i ] ;
                } ;
            } ;
            return ret ;
        } ;
        and ( long_bitmap, _this = false ) {
            let ret = _this ? this : new long_bit_map( this.__length ) ;
            if ( this.__length == long_bitmap.__length ) {
                for ( let i = 0 ; i < this.__size ; i++ ) {
                    ret.__map[ i ] = this.__map[ i ] & long_bitmap.__map[ i ] ;
                } ;
            } ;
            return ret ;
        } ;
        not ( long_bitmap, _this = false ) {
            let ret = _this ? this : new long_bit_map( this.__length ) ;
            if ( this.__length == long_bitmap.__length ) {
                for ( let i = 0 ; i < this.__size ; i++ ) {
                    ret.__map[ i ] = this.__map[ i ] ^ long_bitmap.__map[ i ] ;
                } ;
            } ;
            return ret ;
        } ;
        equal ( long_bitmap ) {
            let ret = true ;
            if ( this.__length == long_bitmap.__length ) {
                for ( let i = 0 ; i < this.__size ; i++ ) {
                    if ( this.__map[ i ] != long_bitmap.__map[ i ] ) {
                        ret = false ;
                        break ;
                    } ;
                } ;
            } else {
                ret = false ;
            } ;
            return ret ;
        } ;
    } ;
