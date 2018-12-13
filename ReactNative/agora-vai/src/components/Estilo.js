import {StyleSheet} from 'react-native';

// StyleSheet ajuda nas mensagens de erro, e futuramente pode melhorar o desempenho
export const styleHeader = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#001a44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: '#fff',
    }
})

export const stylePeopleList = StyleSheet.create({
    container: {
        backgroundColor: '#ddeaff',
    },
    line: {
        height: 60,
        borderTopWidth: 5,
        borderTopColor: '#fff',
        
        // Alinhamento vertical usando alignItems + flexDirection
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 7
    },
    avatar: {
        // aspectRatio mantem as proporções da imagem
        aspectRatio: 1,
        flex:1,
        marginLeft: 10,
        borderRadius: 50
    }
})

export const stylePeopleDetailPage = StyleSheet.create ({
    container: {
        padding: 20,
    },
    avatar: {
        aspectRatio: 1,
        //borderRadius: 600,
    },
    detailContainer: {
        backgroundColor: '#ddeaff',
        marginTop: 15,
        elevation: 1,
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,  
    },
    content: {
        flex: 2,
    },
    labelMaior: {
        fontSize: 14,
    },
    
})

export const stylesPeoplePage = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    error: {
        fontSize: 15,
        color: "red",
        alignSelf: 'center',
    },
})