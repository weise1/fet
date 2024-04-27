import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCmQPhRzqzgDCW7fig2H2qlKU6xfYbjb5Y",
    authDomain: "felab10.firebaseapp.com",
    projectId: "felab10",
    storageBucket: "felab10.appspot.com",
    messagingSenderId: "1069203227421",
    appId: "1:1069203227421:web:412ea63648b94a9a8317f4",
});

const firestore = firebase.firestore();

export const addExpense = async (expenseData) => {
    try {
        await firestore.collection("expenses").add(expenseData);
    } catch (error) {
        console.error("Error adding expense: ", error);
    }
};

export const getExpenses = async () => {
    try {
        const snapshot = await firestore.collection("expenses").get();
        const expenses = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return expenses;
    } catch (error) {
        console.error("Error getting expenses: ", error);
        return [];
    }
};

export const updateExpense = async (expenseId, expenseData) => {
    try {
        await firestore
            .collection("expenses")
            .doc(expenseId)
            .update(expenseData);
    } catch (error) {
        console.error("Error updating expense: ", error);
    }
};

export const deleteExpense = async (expenseId) => {
    try {
        await firestore.collection("expenses").doc(expenseId).delete();
    } catch (error) {
        console.error("Error deleting expense: ", error);
    }
};
